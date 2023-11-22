CREATE TABLE Exercises (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    path VARCHAR(255) NOT NULL,
    mode_id VARCHAR(255) REFERENCES Modes(id),
    group_id VARCHAR(255) REFERENCES Groups(id),
    order_num INTEGER
);

CREATE TABLE Groups (
    id VARCHAR(255) PRIMARY KEY,
    label VARCHAR(255) NOT NULL
);

CREATE TABLE Modes (
    id VARCHAR(255) PRIMARY KEY,
    label VARCHAR(255) NOT NULL
);

INSERT INTO Groups (id, label) VALUES
    ('INTRO', 'Intro'),
    ('VARIABLES', 'Variables');

INSERT INTO Modes (id, label) VALUES
    ('COMPILE', 'Compile'),
    ('TEST', 'Test');

INSERT INTO Exercises (id, name, path, mode_id, group_id, order_num) VALUES
    ('INTRO1', 'intro1', 'exercises/intro/intro1.cairo', 'COMPILE', 'INTRO', 1),
    ('INTRO2', 'intro2', 'exercises/intro/intro2.cairo', 'COMPILE', 'INTRO', 2),
    ('VARIABLES1', 'variables1', 'exercises/variables/variables1.cairo', 'COMPILE', 'VARIABLES', 3);