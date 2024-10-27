// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { pgTable } from "drizzle-orm/pg-core";
import { 
  serial, 
  varchar, 
  timestamp, 
  integer, 
  boolean 
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";