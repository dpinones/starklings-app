CREATE TABLE Groups (
    id VARCHAR(255) PRIMARY KEY,
    label VARCHAR(255) NOT NULL
);

CREATE TABLE Modes (
    id VARCHAR(255) PRIMARY KEY,
    label VARCHAR(255) NOT NULL
);

CREATE TABLE Exercises (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    path VARCHAR(255) NOT NULL,
    modes VARCHAR(255) REFERENCES Modes(id),
    groups VARCHAR(255) REFERENCES Groups(id),
    order_num INTEGER
);

INSERT INTO Groups (id, label) VALUES
    ('INTRO', 'Intro'),
    ('VARIABLES', 'Variables'),
    ('PRIMITIVE_TYPES', 'Primitive Types'),
    ('OPERATIONS', 'Operations'),
    ('IF', 'If'),
    ('FUNCTIONS', 'Functions'),
    ('QUIZ_1', 'Quiz 1'),
    ('LOOPS', 'Loops'),
    ('ENUMS', 'Enums'),
    ('OPTIONS', 'Options'),
    ('ARRAYS', 'Arrays'),
    ('STRUCTS', 'Structs'),
    ('MOVE_SEMANTICS', 'Move Semantics'),
    ('TRAITS', 'Traits'),
    ('DICT', 'Dict'),
    ('MODULES', 'Modules'),
    ('STARKNET', 'Starknet');

INSERT INTO Modes (id, label) VALUES
    ('BUILD', 'Build'),
    ('TEST', 'Test');

INSERT INTO Exercises (id, name, path, modes, groups, order_num) VALUES
    ('intro1', 'Intro 1', 'exercises/intro/intro1.cairo', 'BUILD', 'INTRO', 1),
    ('intro2', 'Intro 2', 'exercises/intro/intro2.cairo', 'BUILD', 'INTRO', 2),
    ('variables1', 'Variables 1', 'exercises/variables/variables1.cairo', 'BUILD', 'VARIABLES', 3),
    ('variables2', 'Variables 2', 'exercises/variables/variables2.cairo', 'BUILD', 'VARIABLES', 4),
    ('variables3', 'Variables 3', 'exercises/variables/variables3.cairo', 'BUILD', 'VARIABLES', 5),
    ('variables4', 'Variables 4', 'exercises/variables/variables4.cairo', 'BUILD', 'VARIABLES', 6),
    ('variables5', 'Variables 5', 'exercises/variables/variables5.cairo', 'BUILD', 'VARIABLES', 7),
    ('variables6', 'Variables 6', 'exercises/variables/variables6.cairo', 'BUILD', 'VARIABLES', 8),
    ('primitive_types1', 'Primitive types 1', 'exercises/primitive_types/primitive_types1.cairo', 'BUILD', 'PRIMITIVE_TYPES', 9),
    ('primitive_types2', 'Primitive types 2', 'exercises/primitive_types/primitive_types2.cairo', 'BUILD', 'PRIMITIVE_TYPES', 10),
    ('primitive_types3', 'Primitive types 3', 'exercises/primitive_types/primitive_types3.cairo', 'BUILD', 'PRIMITIVE_TYPES', 11),
    ('primitive_types4', 'Primitive types 4', 'exercises/primitive_types/primitive_types4.cairo', 'TEST', 'PRIMITIVE_TYPES', 12),
    ('operations1', 'Operations 1', 'exercises/operations/operations1.cairo', 'TEST', 'OPERATIONS', 13),
    ('operations2', 'Operations 2', 'exercises/operations/operations2.cairo', 'TEST', 'OPERATIONS', 14),
    ('if1', 'If 1', 'exercises/if/if1.cairo', 'TEST', 'IF', 15),
    ('if2', 'If 2', 'exercises/if/if2.cairo', 'TEST', 'IF', 16),
    ('functions1', 'Functions 1', 'exercises/functions/functions1.cairo', 'BUILD', 'FUNCTIONS', 17),
    ('functions2', 'Functions 2', 'exercises/functions/functions2.cairo', 'BUILD', 'FUNCTIONS', 18),
    ('functions3', 'Functions 3', 'exercises/functions/functions3.cairo', 'BUILD', 'FUNCTIONS', 19),
    ('functions4', 'Functions 4', 'exercises/functions/functions4.cairo', 'BUILD', 'FUNCTIONS', 20),
    ('quizs1', 'Quizs 1', 'exercises/quizs/quizs1.cairo', 'TEST', 'QUIZ_1', 21),
    ('loops1', 'Loops 1', 'exercises/loops/loops1.cairo', 'TEST', 'LOOPS', 22),
    ('loops2', 'Loops 2', 'exercises/loops/loops2.cairo', 'TEST', 'LOOPS', 23),
    ('enums1', 'Enums 1', 'exercises/enums/enums1.cairo', 'BUILD', 'ENUMS', 24),
    ('enums2', 'Enums 2', 'exercises/enums/enums2.cairo', 'BUILD', 'ENUMS', 25),
    ('enums3', 'Enums 3', 'exercises/enums/enums3.cairo', 'TEST', 'ENUMS', 26),
    ('options1', 'Options 1', 'exercises/options/options1.cairo', 'TEST', 'OPTIONS', 27),
    ('options2', 'Options 2', 'exercises/options/options2.cairo', 'TEST', 'OPTIONS', 28),
    ('options3', 'Options 3', 'exercises/options/options3.cairo', 'TEST', 'OPTIONS', 29),
    ('arrays1', 'Arrays 1', 'exercises/arrays/arrays1.cairo', 'TEST', 'ARRAYS', 30),
    ('arrays2', 'Arrays 2', 'exercises/arrays/arrays2.cairo', 'TEST', 'ARRAYS', 31),
    ('arrays3', 'Arrays 3', 'exercises/arrays/arrays3.cairo', 'TEST', 'ARRAYS', 32),
    ('structs1', 'Structs 1', 'exercises/structs/structs1.cairo', 'TEST', 'STRUCTS', 33),
    ('structs2', 'Structs 2', 'exercises/structs/structs2.cairo', 'TEST', 'STRUCTS', 34),
    ('structs3', 'Structs 3', 'exercises/structs/structs3.cairo', 'TEST', 'STRUCTS', 35),
    ('move_semantics1', 'Move semantics 1', 'exercises/move_semantics/move_semantics1.cairo', 'BUILD', 'MOVE_SEMANTICS', 36),
    ('move_semantics2', 'Move semantics 2', 'exercises/move_semantics/move_semantics2.cairo', 'BUILD', 'MOVE_SEMANTICS', 37),
    ('move_semantics3', 'Move semantics 3', 'exercises/move_semantics/move_semantics3.cairo', 'BUILD', 'MOVE_SEMANTICS', 38),
    ('move_semantics4', 'Move semantics 4', 'exercises/move_semantics/move_semantics4.cairo', 'BUILD', 'MOVE_SEMANTICS', 39),
    ('move_semantics5', 'Move semantics 5', 'exercises/move_semantics/move_semantics5.cairo', 'TEST', 'MOVE_SEMANTICS', 40),
    ('move_semantics6', 'Move semantics 6', 'exercises/move_semantics/move_semantics6.cairo', 'BUILD', 'MOVE_SEMANTICS', 41),
    ('traits1', 'Traits 1', 'exercises/traits/traits1.cairo', 'TEST', 'TRAITS', 42),
    ('traits2', 'Traits 2', 'exercises/traits/traits2.cairo', 'TEST', 'TRAITS', 43),
    ('traits3', 'Traits 3', 'exercises/traits/traits3.cairo', 'TEST', 'TRAITS', 44),
    ('dict1', 'Dict 1', 'exercises/dict/dict1.cairo', 'TEST', 'DICT', 45),
    ('dict2', 'Dict 2', 'exercises/dict/dict2.cairo', 'TEST', 'DICT', 46),
    ('dict3', 'Dict 3', 'exercises/dict/dict3.cairo', 'TEST', 'DICT', 47),
    ('modules1', 'Modules 1', 'exercises/modules/modules1.cairo', 'TEST', 'MODULES', 48),
    ('modules2', 'Modules 2', 'exercises/modules/modules2.cairo', 'TEST', 'MODULES', 49),
    ('starknet1', 'Starknet 1', 'exercises/starknet/basics/starknet1.cairo', 'TEST', 'STARKNET', 50),
    ('starknet2', 'Starknet 2', 'exercises/starknet/basics/starknet2.cairo', 'TEST', 'STARKNET', 51),
    ('starknet3', 'Starknet 3', 'exercises/starknet/basics/starknet3.cairo', 'TEST', 'STARKNET', 52),
    ('starknet4', 'Starknet 4', 'exercises/starknet/basics/starknet4.cairo', 'TEST', 'STARKNET', 53),
    ('starknet5', 'Starknet 5', 'exercises/starknet/interoperability/starknet5.cairo', 'TEST', 'STARKNET', 54);
