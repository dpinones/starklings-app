fn main() {
    let arr0 = ArrayTrait::<felt252>::new();

    let mut arr1 = fill_arr(arr0);

    print(arr1.span());

    arr1.append(88);

    print(arr1.span());

    let result = fill_arr();
    assert(*result.at(0) == 22, 'element[0] != 22');
    assert(*result.at(1) == 44, 'element[1] != 44');
    assert(*result.at(2) == 66, 'element[2] != 66');
}

// `fill_arr()` should no longer take `arr: Array<felt252>` as argument
fn fill_arr(arr: Array<felt252>) -> Array<felt252> {
    let mut arr = arr;

    arr.append(22);
    arr.append(44);
    arr.append(66);

    arr
}

fn print(span: Span<felt252>) { 
    let mut i = 0;
    print!("ARRAY: {{ len: {}, values: [ ", span.len());
    loop {
        if span.len() == i {
            break;
        }
        let value = *(span.at(i));
        if span.len() - 1 != i {
            print!("{}, ", value);
        } else {
            print!("{}", value);
        }
        i += 1;
    };
    println!(" ] }}");
}
