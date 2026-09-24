
module ctrpkg::ctr_module {
    public struct Counter has key {
        id: UID,
        count: u64
    }


public struct Incremented has copy, drop {
    new_count : u64
}

public fun create_counter(context: &mut TxContext) {
    let counter = Counter {
        id: object::new(context),
        count: 0

    };
    transfer::share_object(counter);
    }
    

    public fun increment(counter: &mut Counter) {
        counter.count = counter.count + 1;
        sui::event::emit(Incremented {new_count: counter.count });
    }

public fun count(counter: &Counter): u64 {
    counter.count
    }
}