// Return the solution of x^3 + y - 2

fn poly(x: usize, y: usize) -> usize {
    // FILL ME
    res // Do not change
}


// Do not change the test function
#[test]
fn test_poly() {
    let res = poly(5, 3);
    assert(res == 126, 'Error message');
    assert(res < 300, 'res < 300');
    assert(res <= 300, 'res <= 300');
    assert(res > 20, 'res > 20');
    assert(res >= 2, 'res >= 2');
    assert(res != 27, 'res != 27');
    assert(res % 2 == 0, 'res %2 != 0');
}

