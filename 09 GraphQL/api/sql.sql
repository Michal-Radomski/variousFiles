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