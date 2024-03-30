SELECT
  *
FROM
  sharks;

DELETE FROM
  sharks
WHERE
  ID = 1 RETURNING *;

INSERT INTO
  sharks (name, color, weight)
VALUES
  (?, ?, ?) RETURNING *;

SELECT
  *
FROM
  sharks
WHERE
  ID = ?;

DELETE FROM
  sharks
WHERE
  ID = 12;

INSERT INTO
  sharks (name, color, weight)
VALUES
  (?, ?, ?);

UPDATE
  sharks
SET
  name = ?,
  color = ?,
  weight = ?
WHERE
  ID = ?;