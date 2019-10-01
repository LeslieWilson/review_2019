-- If you want to run this schema repeatedly you'll need to drop
-- the table before re-creating it. Note that you'll lose any
-- data if you drop and add a table:

DROP TABLE IF EXISTS articles;

-- Define your schema here:



CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(255),
  description VARCHAR(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);


INSERT INTO articles(title, url, description, created_at, updated_at)
VALUES
('leslie  times', 'www.leslie.com', 'all about leslie', NOW(), NOW())
