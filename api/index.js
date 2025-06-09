// server.js (o api/index.js)
const express = require('express');
const { Pool } = require('pg'); // Importa el módulo de PostgreSQL
const app = express();
const cors = require('cors');
import { fileURLToPath } from 'url';
import path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


app.use(express.json());
app.use(cors());

// Configura la conexión a PostgreSQL usando la URL de Vercel
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL, // Vercel inyecta esto
  ssl: {
    rejectUnauthorized: false // Es posible que necesites esto en Vercel
  }
});

// Prueba la conexión
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error al conectar a PostgreSQL:', err);
  } else {
    console.log('Conectado a Vercel Postgres:', res.rows[0].now);
  }
});

// Ejemplo de ruta de API para obtener usuarios
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener usuarios:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query(`
    SELECT
        p.idPost,
        u.idUser as IdUser,
        u.userName as Name,
        u.nickName as Nick,
        p.contentTitle as Titulo,
        p.mediaType,
        p.mediaURL,
        p.createdAt,
        p.privacy
    FROM post p
    INNER JOIN users u ON u.idUser = p.idUser
`);
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener usuarios:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/usersPost', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users u JOIN post p ON u.idUser = p.idUser');
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener usuarios:', err);
    res.status(500).json({ error: err.message });
  }
});


app.get('/api/users/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('SELECT * FROM users WHERE IdUser = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    res.json(result.rows[0]);

  } catch (err) {
    console.error(`Error al obtener usuario con ID ${id}:`, err);
    if (err.code === '22P02') { 
        return res.status(400).json({ message: 'ID de usuario inválido.' });
    }
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});


app.get('/api/posts/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query(`
    SELECT
        p.idPost,
        u.idUser as IdUser,
        u.userName as Name,
        u.nickName as Nick,
        p.contentTitle as Titulo,
        p.mediaType,
        p.mediaURL,
        p.createdAt,
        p.privacy
    FROM post p
    INNER JOIN users u ON u.idUser = p.idUser
    WHERE p.idUser = $1
`, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    res.json(result.rows[0]);

  } catch (err) {
    console.error(`Error al obtener usuario con ID ${id}:`, err);
    if (err.code === '22P02') { 
        return res.status(400).json({ message: 'ID de usuario inválido.' });
    }
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});


app.get('/api/image/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('SELECT profilePhotoURL FROM users WHERE idUser = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    res.json(result.rows[0]);

  } catch (err) {
    console.error(`Error al obtener usuario con ID ${id}:`, err);
    if (err.code === '22P02') { 
        return res.status(400).json({ message: 'ID de usuario inválido.' });
    }
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});



// Ejemplo de ruta de API para crear un usuario
// app.post('/api/users', async (req, res) => {
//     const { name, email } = req.body;
//     try {
//         const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email', [name, email]);
//         res.status(201).json(result.rows[0]);
//     } catch (err) {
//         console.error('Error al crear usuario:', err);
//         res.status(500).json({ error: err.message });
//     }
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Importante para Vercel Functions


// app.get('/coverPhoto/:id', (req, res) => {
//   const id = req.params.id;
//   db.get('SELECT coverPhotoURL FROM users WHERE idUser = ?', [id], (err, row) => {
//     if (err) {
//       res.status(500).send('Error al obtener la imagen');
//       return;
//     }
//     // console.log(row.profilePhoto)
//     if (!row || !row.coverPhotoURL) {
//       res.status(404).send('Imagen no encontrada');
//       return;
//     }
//     res.set('Content-Type', 'image/png'); // Cambia a image/png si corresponde
//     res.send(row.coverPhotoURL);
//   });
// });

// app.get('/imageDefault', (req, res) => {
//     const imagePath = path.join(__dirname, 'src', 'assets', 'imagenUsuario.png');
//     res.set('Content-Type', 'image/png');
//     res.sendFile(imagePath);
// });


// app.get('/postMediaPhoto/:id', (req, res) => {
//   const id = req.params.id;
//   db.get('SELECT mediaURLPhoto FROM post WHERE idPost = ?', [id], (err, row) => {
//     if (err) {
//       res.status(500).send('Error al obtener la imagen');
//       return;
//     }
//     // console.log(row.profilePhoto)
//     if (!row || !row.mediaURLPhoto) {
//       res.status(404).send('Imagen no encontrada');
//       return;
//     }
//     res.set('Content-Type', 'image/png'); // Cambia a image/png si corresponde
//     res.send(row.mediaURLPhoto);
//   });
// });



// app.listen(PORT, ()=>{
//     console.log(`El server esta en http://localhost:${PORT}`)
// })