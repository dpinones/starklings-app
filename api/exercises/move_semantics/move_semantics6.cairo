#[derive(Drop)]
struct Number {
    value: u32, 
}

// Should not take ownership and not modify the variable passed.
fn get_value(number: Number) -> u32 {
    number.value
}

// Should take ownership
fn set_value(number: Number) {
    let value = 2222222;
    number = Number { value };
    println!("{}", number.value);
}

#[test]
fn test_move_semantics6() {
    let mut number = Number { value: 1111111 };
    assert(get_value(@number) == 1111111, 'value is not 1111111');
    set_value(ref number);
    assert(get_value(@number) == 2222222, 'value is not 1111111');
}
