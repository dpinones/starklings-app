#[derive(Copy, Drop)]
struct Animal {
    noise: felt252
}

trait AnimalTrait {
    fn new(noise: felt252) -> Animal;
    fn make_noise(self: Animal) -> felt252;
}

impl AnimalImpl of AnimalTrait { // TODO: implement the trait AnimalTrait for Animal
    fn new(noise: felt252) -> Animal {
        Animal {noise}
    }

    fn make_noise(self:Animal) -> felt252 {
        self.noise
    }
}

#[test]
fn test_traits1() {
    // TODO make the test pass by creating two instances of Animal
    // and calling make_noise on them
    let cat = AnimalImpl::new('meow');
    let cow = AnimalImpl::new('moo');

    assert(cat.make_noise() == 'meow', 'Wrong noise');
    assert(cow.make_noise() == 'moo', 'Wrong noise');
}
