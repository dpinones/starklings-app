use array::ArrayTrait;
use array::ArrayTCloneImpl;
use array::SpanTrait;
use clone::Clone;
use debug::PrintTrait;

fn main() {
    let arr0 = ArrayTrait::<felt252>::new();

    let mut arr1 = fill_arr(arr0);

    arr1.clone().print();

    arr1.append(88);

    arr1.clone().print();
}

// `fill_arr()` should no longer take `arr: Array<felt252>` as argument
fn fill_arr(arr: Array<felt252>) -> Array<felt252> {
    let mut arr = arr;

    arr.append(22);
    arr.append(44);
    arr.append(66);

    arr
}
