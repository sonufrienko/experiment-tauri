#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn do_command() {
    println!("I was invoked from JS!");
}

#[tauri::command]
fn post_command(user_name: String) {
    println!("I was invoked from JS, with this message: {}", user_name);
}

#[tauri::command]
fn get_command(user_name: String) -> String {
    format!("Hello {}", user_name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![do_command])
        .invoke_handler(tauri::generate_handler![post_command])
        .invoke_handler(tauri::generate_handler![get_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
