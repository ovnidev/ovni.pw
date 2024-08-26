# OVNI Password Manager

**[OVNI.pw](https://ovni.pw)** is a password manager and generator that works entirely locally in the browser, using hashes. It never stores passwords in the browser, only information such as folders, identifiers, and alphabets.

## Features

- **Password Generation:** You can generate secure passwords using different configurations and alphabets.
- **Folder Creation:** Organize your passwords into custom folders for better management.
- **Export/Import Data:** Save and load your data to a file to transfer them between devices or make backups.
- **Custom Alphabets:** Define your own alphabets to generate passwords that fit your specific needs.

## How It Works

This password generator uses a hash system created from the subtle.digest method of the Web Crypto API using SHA-512. It then converts the hash into an array of hexadecimal values of two characters for added security.

This means that every time you enter a master password, along with an identifier and an alphabet, the same text string is always generated, in this case a password.

By having a static password generation system based on a specific hash, you don't need to store passwords anywhere, as you can generate them with only a master password.

## Security and Privacy

This password manager operates entirely locally in your browser, meaning your data never leaves your device.

The website [ovni.pw](https://ovni.pw) only includes an analytics script that does not collect any data beyond geographical location, device, and browser used. All for purely statistical purposes.

For added security, you can fork this project for local use or create your own version. In any case, I am not responsible for misuse by derivatives of this project.

## Instalation

Clone the project and install the dependencies

```sh
pnpm install
```

Run the development environment

```sh
pnpm run dev
```

Create a build of the project

```sh
pnpm run build
```

## Contribution

If you have ideas for new features, improvements, or bug fixes, feel free to submit a PR.

## Credits

This project would not be possible without the original idea from [@pagoru](https://github.com/pagoru/sss.pagoru.es).

## Logo Copyright
The logo used in this project is protected by copyright and is not under an MIT license. To see the license to use the logo, access the logo.svg file.