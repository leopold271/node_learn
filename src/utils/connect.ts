import mongoose from 'mongoose';
import config from 'config';
import log from './logger'

async function connect() {
  const dburi = config.get<string>('dbUri');

  try {
    await mongoose.connect(dburi)
    log.info('Db connected');
  } catch (error) {
    log.error('Could not connect ti DB');
    process.exit(1)
  }
}
export default connect;