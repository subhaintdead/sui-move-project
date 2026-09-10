module hello_world::hello_sui;

use std::string::String;

    public fun hello() : String{
     return b"hello world".to_string()
}

