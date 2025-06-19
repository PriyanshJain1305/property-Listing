const pool = require("../models/db");

exports.getAllProperties = async (req, res) => {
        const userId = req.user.id;
        const result = await pool.query("SELECT * FROM properties WHERE user_id = $1", [userId]);
        // res.status(200).json(result.rows);
        res.status(200).json({
            status: 200,
            message: "Properties fetched successfully",
            data: {
                properties: result.rows
            }
        })
};

exports.create = async (req, res) => {
    const { title, description, price } = req.body;
    const image = req.file ? req.file.filename : null;
    const userId = req.user.id;

    const result = await pool.query(
        "INSERT INTO properties (user_id, title, description, price, image ) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [userId, title, description, price, image ]
    );
    res.status(201).json(result.rows[0]);
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const { title, description, price } = req.body;
    const image = req.file ? req.file.filename : null;

    const result = await pool.query(
        "UPDATE properties SET title = $1, description = $2, price = $3, image =COALESCE($4, image) WHERE id = $5 RETURNING *",
        [title, description, price, image, id]
    );
    res.status(200).json(result.rows[0]);
};

exports.delete = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM properties WHERE id = $1 RETURNING *", [id]);
    res.status(204).send();
};