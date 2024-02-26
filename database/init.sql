CREATE TABLE Groups (
    id VARCHAR(255) PRIMARY KEY,
    label VARCHAR(255) NOT NULL
);

CREATE TABLE Mode (
    id VARCHAR(255) PRIMARY KEY,
    label VARCHAR(255) NOT NULL
);

CREATE TABLE Exercises (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    path VARCHAR(255) NOT NULL,
    mode VARCHAR(255) REFERENCES Mode(id),
    exercise_group VARCHAR(255) REFERENCES Groups(id),
    exercise_order INTEGER
);

CREATE TABLE Resolutions (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(255),
    exercise_id VARCHAR(255) REFERENCES Exercises(id),
    resolution_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_name, exercise_id)
);

INSERT INTO Groups (id, label) VALUES
    ('intro', 'Intro'),
    ('variables', 'Variables'),
    ('primitive_types', 'Primitive Types'),
    ('operations', 'Operations'),
    ('if', 'If'),
    ('functions', 'Functions'),
    ('quiz_1', 'Quiz 1'),
    ('loops', 'Loops'),
    ('enums', 'Enums'),
    ('options', 'Options'),
    ('arrays', 'Arrays'),
    ('structs', 'Structs'),
    ('move_semantics', 'Move Semantics'),
    ('traits', 'Traits'),
    ('dict', 'Dict'),
    ('modules', 'Modules'),
    ('starknet', 'Starknet');

INSERT INTO Mode (id, label) VALUES
    ('build', 'Build'),
    ('test', 'Test');

INSERT INTO Exercises (id, name, path, mode, exercise_group, exercise_order) VALUES
    ('intro1', 'Intro 1', 'exercises/intro/intro1.cairo', 'build', 'intro', 1),
    ('intro2', 'Intro 2', 'exercises/intro/intro2.cairo', 'build', 'intro', 2),
    ('variables1', 'Variables 1', 'exercises/variables/variables1.cairo', 'build', 'variables', 3),
    ('variables2', 'Variables 2', 'exercises/variables/variables2.cairo', 'build', 'variables', 4),
    ('variables3', 'Variables 3', 'exercises/variables/variables3.cairo', 'build', 'variables', 5),
    ('variables4', 'Variables 4', 'exercises/variables/variables4.cairo', 'build', 'variables', 6),
    ('variables5', 'Variables 5', 'exercises/variables/variables5.cairo', 'build', 'variables', 7),
    ('variables6', 'Variables 6', 'exercises/variables/variables6.cairo', 'build', 'variables', 8),
    ('primitive_types1', 'Primitive types 1', 'exercises/primitive_types/primitive_types1.cairo', 'build', 'primitive_types', 9),
    ('primitive_types2', 'Primitive types 2', 'exercises/primitive_types/primitive_types2.cairo', 'build', 'primitive_types', 10),
    ('primitive_types3', 'Primitive types 3', 'exercises/primitive_types/primitive_types3.cairo', 'build', 'primitive_types', 11),
    ('primitive_types4', 'Primitive types 4', 'exercises/primitive_types/primitive_types4.cairo', 'test', 'primitive_types', 12),
    ('operations1', 'Operations 1', 'exercises/operations/operations1.cairo', 'test', 'operations', 13),
    ('operations2', 'Operations 2', 'exercises/operations/operations2.cairo', 'test', 'operations', 14),
    ('if1', 'If 1', 'exercises/if/if1.cairo', 'test', 'if', 15),
    ('if2', 'If 2', 'exercises/if/if2.cairo', 'test', 'if', 16),
    ('functions1', 'Functions 1', 'exercises/functions/functions1.cairo', 'build', 'functions', 17),
    ('functions2', 'Functions 2', 'exercises/functions/functions2.cairo', 'build', 'functions', 18),
    ('functions3', 'Functions 3', 'exercises/functions/functions3.cairo', 'build', 'functions', 19),
    ('functions4', 'Functions 4', 'exercises/functions/functions4.cairo', 'build', 'functions', 20),
    ('quizs1', 'Quizs 1', 'exercises/quizs/quizs1.cairo', 'test', 'quiz_1', 21),
    ('loops1', 'Loops 1', 'exercises/loops/loops1.cairo', 'test', 'loops', 22),
    ('loops2', 'Loops 2', 'exercises/loops/loops2.cairo', 'test', 'loops', 23),
    ('enums1', 'Enums 1', 'exercises/enums/enums1.cairo', 'build', 'enums', 24),
    ('enums2', 'Enums 2', 'exercises/enums/enums2.cairo', 'build', 'enums', 25),
    ('enums3', 'Enums 3', 'exercises/enums/enums3.cairo', 'test', 'enums', 26),
    ('options1', 'Options 1', 'exercises/options/options1.cairo', 'test', 'options', 27),
    ('options2', 'Options 2', 'exercises/options/options2.cairo', 'test', 'options', 28),
    ('options3', 'Options 3', 'exercises/options/options3.cairo', 'test', 'options', 29),
    ('arrays1', 'Arrays 1', 'exercises/arrays/arrays1.cairo', 'test', 'arrays', 30),
    ('arrays2', 'Arrays 2', 'exercises/arrays/arrays2.cairo', 'test', 'arrays', 31),
    ('arrays3', 'Arrays 3', 'exercises/arrays/arrays3.cairo', 'test', 'arrays', 32),
    ('structs1', 'Structs 1', 'exercises/structs/structs1.cairo', 'test', 'structs', 33),
    ('structs2', 'Structs 2', 'exercises/structs/structs2.cairo', 'test', 'structs', 34),
    ('structs3', 'Structs 3', 'exercises/structs/structs3.cairo', 'test', 'structs', 35),
    ('move_semantics1', 'Move semantics 1', 'exercises/move_semantics/move_semantics1.cairo', 'build', 'move_semantics', 36),
    ('move_semantics2', 'Move semantics 2', 'exercises/move_semantics/move_semantics2.cairo', 'build', 'move_semantics', 37),
    ('move_semantics3', 'Move semantics 3', 'exercises/move_semantics/move_semantics3.cairo', 'build', 'move_semantics', 38),
    ('move_semantics4', 'Move semantics 4', 'exercises/move_semantics/move_semantics4.cairo', 'build', 'move_semantics', 39),
    ('move_semantics5', 'Move semantics 5', 'exercises/move_semantics/move_semantics5.cairo', 'test', 'move_semantics', 40),
    ('move_semantics6', 'Move semantics 6', 'exercises/move_semantics/move_semantics6.cairo', 'build', 'move_semantics', 41),
    ('traits1', 'Traits 1', 'exercises/traits/traits1.cairo', 'test', 'traits', 42),
    ('traits2', 'Traits 2', 'exercises/traits/traits2.cairo', 'test', 'traits', 43),
    ('traits3', 'Traits 3', 'exercises/traits/traits3.cairo', 'test', 'traits', 44),
    ('dict1', 'Dict 1', 'exercises/dict/dict1.cairo', 'test', 'dict', 45),
    ('dict2', 'Dict 2', 'exercises/dict/dict2.cairo', 'test', 'dict', 46),
    ('dict3', 'Dict 3', 'exercises/dict/dict3.cairo', 'test', 'dict', 47),
    ('modules1', 'Modules 1', 'exercises/modules/modules1.cairo', 'test', 'modules', 48),
    ('modules2', 'Modules 2', 'exercises/modules/modules2.cairo', 'test', 'modules', 49),
    ('starknet1', 'Starknet 1', 'exercises/starknet/basics/starknet1.cairo', 'test', 'starknet', 50),
    ('starknet2', 'Starknet 2', 'exercises/starknet/basics/starknet2.cairo', 'test', 'starknet', 51),
    ('starknet3', 'Starknet 3', 'exercises/starknet/basics/starknet3.cairo', 'test', 'starknet', 52),
    ('starknet4', 'Starknet 4', 'exercises/starknet/basics/starknet4.cairo', 'test', 'starknet', 53),
    ('starknet5', 'Starknet 5', 'exercises/starknet/interoperability/starknet5.cairo', 'test', 'starknet', 54);
