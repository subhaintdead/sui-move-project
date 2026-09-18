
module ctrpkg::ctr_module {
    public struct Counter has key {
        id: UID;
        count: u64
    }
}

//fun fact, "id: UID" is not arbitrary and all folks use this exact line(gng im new to this thing)

public fun create_counter(context: &mut TxContext) {
    let counter = Counter {
        id: object::new(context);
        count: 0

    }
    transfer::share_object(counter)
    }