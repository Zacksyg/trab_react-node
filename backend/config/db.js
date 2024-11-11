const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { // Use MONGODB_URI conforme o .env
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('Erro de conexão:', err.message);
        process.exit(1); // Encerra o processo com erro
    }
};

module.exports = connectDB;
