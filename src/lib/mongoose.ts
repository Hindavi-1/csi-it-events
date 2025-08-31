import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI in .env.local");
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongoose: MongooseCache;
}



let cached: MongooseCache = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<Mongoose> {
  if (cached.conn) {
    // Verify connection is still alive
    if (cached.conn.connection.readyState === 1) {
      return cached.conn;
    }
    // Connection died, reset cache
    cached.conn = null;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongooseInstance: Mongoose) => {
        console.log("MongoDB connected successfully");
        
        // Add event listeners for connection monitoring
        mongooseInstance.connection.on('error', (err) => {
          console.error('MongoDB connection error:', err);
          cached.conn = null;
          cached.promise = null;
        });

        mongooseInstance.connection.on('disconnected', () => {
          console.log('MongoDB disconnected');
          cached.conn = null;
          cached.promise = null;
        });

        return mongooseInstance;
      })
      .catch((error) => {
        // Reset promise on connection failure
        cached.promise = null;
        console.error("MongoDB connection failed:", error);
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
}

// Optional: Add a function to check connection status
export function getConnectionStatus(): string {
  if (!cached.conn) return "disconnected";
  
  const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  return states[cached.conn.connection.readyState] || 'unknown';
}