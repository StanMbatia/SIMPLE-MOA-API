const env = process.env.NODE_ENV || "development";

export const config = {
  development: {
    db: 'mongodb://localhost:4000/MOA API',
    secret: '2024'
  },
  test: {
    db: 'mongodb://localhost:4000/MOA API_TEST',
    secret: '2025'
  }
};

export default config[env];