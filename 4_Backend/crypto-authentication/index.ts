import { scrypt, randomFill, createCipheriv } from "node:crypto";

async function testingCyrpto(pass: string) {
  const algorithm = "aes-192-cbc";

  try {
    scrypt(pass, "salt", 24, (err, key) => {
      if (err) throw err;

      randomFill(new Uint8Array(16), (err, iv) => {
        if (err) throw err;

        const cipher = createCipheriv(algorithm, key, iv);

        let encrypted = "";
        cipher.setEncoding("hex");
        // console.log("Cipher data 0:: ", cipher);

        cipher.on("data", (chunk) => (encrypted += chunk));
        // console.log("Cipher data 1:: ", cipher);

        cipher.on("end", () => console.log(encrypted));

        console.log("Cipher data 2:: ", cipher);

        cipher.end();
      });
    });
  } catch (error) {
    console.log("error");
  }
}

testingCyrpto("sammmy879");
