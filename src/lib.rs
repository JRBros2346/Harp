mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, Harp!");
}

mod harp {
    #[super::wasm_bindgen]
    pub struct Engine {
        count: usize,
    }
    impl Engine {
        pub fn new() -> Self {
            Engine {
                count: 0,
            }
        }
        pub fn start(self) {
            self.r#loop();
        }
        fn r#loop(self) {
            self.count += 1;
            web_sys::window(self.r#loop.bind(self));
        }
    }
}