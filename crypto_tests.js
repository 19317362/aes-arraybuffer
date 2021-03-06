// test examples from http://csrc.nist.gov/publications/nistpubs/800-38a/sp800-38a.pdf

test("CBC AES", function() {
  function test_aes_cbc_symmetric(input, key, iv, expected_encrypted) {
    var encrypted = Crypto.encrypt_aes_cbc(input, key, iv);
    var decrypted = Crypto.decrypt_aes_cbc(encrypted, key, iv);

    return (
      BufferUtils.buffer_equal(encrypted, expected_encrypted) &&
      BufferUtils.buffer_equal(decrypted, input)
    );
  }

  var key128 = new Uint8Array([
    0x2b, 0x7e, 0x15, 0x16, 0x28, 0xae, 0xd2, 0xa6,
    0xab, 0xf7, 0x15, 0x88, 0x09, 0xcf, 0x4f, 0x3c
  ]);
  var iv128 = new Uint8Array([
    0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07,
    0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f
  ]);
  var input128 = new Uint8Array([
    0x6b, 0xc1, 0xbe, 0xe2, 0x2e, 0x40, 0x9f, 0x96, 0xe9, 0x3d, 0x7e, 0x11, 0x73, 0x93, 0x17, 0x2a,
    0xae, 0x2d, 0x8a, 0x57, 0x1e, 0x03, 0xac, 0x9c, 0x9e, 0xb7, 0x6f, 0xac, 0x45, 0xaf, 0x8e, 0x51,
    0x30, 0xc8, 0x1c, 0x46, 0xa3, 0x5c, 0xe4, 0x11, 0xe5, 0xfb, 0xc1, 0x19, 0x1a, 0x0a, 0x52, 0xef,
    0xf6, 0x9f, 0x24, 0x45, 0xdf, 0x4f, 0x9b, 0x17, 0xad, 0x2b, 0x41, 0x7b, 0xe6, 0x6c, 0x37, 0x10
  ]);
  var encrypted128 = new Uint8Array([
    0x76, 0x49, 0xab, 0xac, 0x81, 0x19, 0xb2, 0x46, 0xce, 0xe9, 0x8e, 0x9b, 0x12, 0xe9, 0x19, 0x7d,
    0x50, 0x86, 0xcb, 0x9b, 0x50, 0x72, 0x19, 0xee, 0x95, 0xdb, 0x11, 0x3a, 0x91, 0x76, 0x78, 0xb2,
    0x73, 0xbe, 0xd6, 0xb8, 0xe3, 0xc1, 0x74, 0x3b, 0x71, 0x16, 0xe6, 0x9e, 0x22, 0x22, 0x95, 0x16,
    0x3f, 0xf1, 0xca, 0xa1, 0x68, 0x1f, 0xac, 0x09, 0x12, 0x0e, 0xca, 0x30, 0x75, 0x86, 0xe1, 0xa7
  ]);
  ok(test_aes_cbc_symmetric(input128.buffer, key128.buffer, iv128.buffer, encrypted128.buffer), "128 bit");

  var key192 = new Uint8Array([
    0x8e, 0x73, 0xb0, 0xf7, 0xda, 0x0e, 0x64, 0x52,
    0xc8, 0x10, 0xf3, 0x2b, 0x80, 0x90, 0x79, 0xe5,
    0x62, 0xf8, 0xea, 0xd2, 0x52, 0x2c, 0x6b, 0x7b
  ]);
  var iv192 = new Uint8Array([
    0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07,
    0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f
  ]);
  var input192 = new Uint8Array([
    0x6b, 0xc1, 0xbe, 0xe2, 0x2e, 0x40, 0x9f, 0x96, 0xe9, 0x3d, 0x7e, 0x11, 0x73, 0x93, 0x17, 0x2a,
    0xae, 0x2d, 0x8a, 0x57, 0x1e, 0x03, 0xac, 0x9c, 0x9e, 0xb7, 0x6f, 0xac, 0x45, 0xaf, 0x8e, 0x51,
    0x30, 0xc8, 0x1c, 0x46, 0xa3, 0x5c, 0xe4, 0x11, 0xe5, 0xfb, 0xc1, 0x19, 0x1a, 0x0a, 0x52, 0xef,
    0xf6, 0x9f, 0x24, 0x45, 0xdf, 0x4f, 0x9b, 0x17, 0xad, 0x2b, 0x41, 0x7b, 0xe6, 0x6c, 0x37, 0x10
  ]);
  var encrypted192 = new Uint8Array([
    0x4f, 0x02, 0x1d, 0xb2, 0x43, 0xbc, 0x63, 0x3d, 0x71, 0x78, 0x18, 0x3a, 0x9f, 0xa0, 0x71, 0xe8,
    0xb4, 0xd9, 0xad, 0xa9, 0xad, 0x7d, 0xed, 0xf4, 0xe5, 0xe7, 0x38, 0x76, 0x3f, 0x69, 0x14, 0x5a,
    0x57, 0x1b, 0x24, 0x20, 0x12, 0xfb, 0x7a, 0xe0, 0x7f, 0xa9, 0xba, 0xac, 0x3d, 0xf1, 0x02, 0xe0,
    0x08, 0xb0, 0xe2, 0x79, 0x88, 0x59, 0x88, 0x81, 0xd9, 0x20, 0xa9, 0xe6, 0x4f, 0x56, 0x15, 0xcd
  ]);

  ok(test_aes_cbc_symmetric(input192.buffer, key192.buffer, iv192.buffer, encrypted192.buffer), "192 bit");

  var key256 = new Uint8Array([
    0x60, 0x3d, 0xeb, 0x10, 0x15, 0xca, 0x71, 0xbe,
    0x2b, 0x73, 0xae, 0xf0, 0x85, 0x7d, 0x77, 0x81,
    0x1f, 0x35, 0x2c, 0x07, 0x3b, 0x61, 0x08, 0xd7,
    0x2d, 0x98, 0x10, 0xa3, 0x09, 0x14, 0xdf, 0xf4
  ]);
  var iv256 = new Uint8Array([
    0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07,
    0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f
  ]);
  var input256 = new Uint8Array([
    0x6b, 0xc1, 0xbe, 0xe2, 0x2e, 0x40, 0x9f, 0x96, 0xe9, 0x3d, 0x7e, 0x11, 0x73, 0x93, 0x17, 0x2a,
    0xae, 0x2d, 0x8a, 0x57, 0x1e, 0x03, 0xac, 0x9c, 0x9e, 0xb7, 0x6f, 0xac, 0x45, 0xaf, 0x8e, 0x51,
    0x30, 0xc8, 0x1c, 0x46, 0xa3, 0x5c, 0xe4, 0x11, 0xe5, 0xfb, 0xc1, 0x19, 0x1a, 0x0a, 0x52, 0xef,
    0xf6, 0x9f, 0x24, 0x45, 0xdf, 0x4f, 0x9b, 0x17, 0xad, 0x2b, 0x41, 0x7b, 0xe6, 0x6c, 0x37, 0x10
  ]);
  var encrypted256 = new Uint8Array([
    0xf5, 0x8c, 0x4c, 0x04, 0xd6, 0xe5, 0xf1, 0xba, 0x77, 0x9e, 0xab, 0xfb, 0x5f, 0x7b, 0xfb, 0xd6,
    0x9c, 0xfc, 0x4e, 0x96, 0x7e, 0xdb, 0x80, 0x8d, 0x67, 0x9f, 0x77, 0x7b, 0xc6, 0x70, 0x2c, 0x7d,
    0x39, 0xf2, 0x33, 0x69, 0xa9, 0xd9, 0xba, 0xcf, 0xa5, 0x30, 0xe2, 0x63, 0x04, 0x23, 0x14, 0x61,
    0xb2, 0xeb, 0x05, 0xe2, 0xc3, 0x9b, 0xe9, 0xfc, 0xda, 0x6c, 0x19, 0x07, 0x8c, 0x6a, 0x9d, 0x1b
  ]);

  ok(test_aes_cbc_symmetric(input256.buffer, key256.buffer, iv256.buffer, encrypted256.buffer), "256 bit");
});

test("PKCS padding", function() {
  function test_aes_cbc_padding_symmetric(input, key, iv) {
    var encrypted = Crypto.encrypt_aes_cbc(Crypto.pkcs_pad(input), key, iv);
    var decrypted = Crypto.pkcs_unpad(Crypto.decrypt_aes_cbc(encrypted, key, iv));

    return BufferUtils.buffer_equal(decrypted, input);
  }

  function test_aes_cbc_padding() {
    var key = new Uint8Array([
      0xc2, 0x86, 0x69, 0x6d, 0x88, 0x7c, 0x9a, 0xa0,
      0x61, 0x1b, 0xbb, 0x3e, 0x20, 0x25, 0xa4, 0x5a
    ]);
    var iv = new Uint8Array([
      0x56, 0x2e, 0x17, 0x99, 0x6d, 0x09, 0x3d, 0x28,
      0xdd, 0xb3, 0xba, 0x69, 0x5a, 0x2e, 0x6f, 0x58
    ]);

    for (var i = 0; i <= 256; i++) {
      var input = new Uint8Array(i);
      for (var j = 0; j < i; j++) {
        input[j] = j;
      }

      if (!test_aes_cbc_padding_symmetric(input.buffer, key.buffer, iv.buffer)) {
        return false;
      }
    }

    return true;
  }

  ok(test_aes_cbc_padding(), "CBC AES-128 with PKCS pad/unpad on 0-255 bytes input");

  function test_pkcs_invalid_padding(buffer) {
    return (
      Crypto.pkcs_pad_byte_count(buffer) == 0 &&
      BufferUtils.buffer_equal(Crypto.pkcs_unpad(buffer), buffer)
    )
  }

  var invalid_padding1 = new Uint8Array([]);
  ok(test_pkcs_invalid_padding(invalid_padding1.buffer), "Empty buffer unpad");

  var invalid_padding2 = new Uint8Array([0xff]);
  ok(test_pkcs_invalid_padding(invalid_padding2.buffer), "Count > max buffer unpad");

  var invalid_padding3 = new Uint8Array([0x2]);
  ok(test_pkcs_invalid_padding(invalid_padding3.buffer), "Count > length buffer unpad");
});

test("CBC AES-128 Benchmark", function() {
  function mesure(prefix, size, unit, f) {
    var start = new Date();
    var r = f();
    var delta = ((new Date()) - start) / 1000;
    ok(
      true,
      prefix + " " +
        size + " " + unit + " in " +
        delta.toFixed(4) + "s, " +
        (size / delta).toFixed(4) + " " + unit + "/s");
    return r;
  }

  var iv = new Uint8Array([
    0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef,
    0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef
  ]);
  var key = new Uint8Array([
    0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef,
    0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef
  ]);
  var input = new Uint8Array(10000000);
  for (var i = 0; i < input.length; i++) {
    input[i] = i & 0xff;
  }

  var encrypted = mesure("Encrypt", input.length / 1000000, "MB", function() {
    return Crypto.encrypt_aes_cbc(input.buffer, key.buffer, iv.buffer);
  });

  var decrypted = mesure("Decrypt", encrypted.byteLength / 1000000, "MB", function() {
    return Crypto.decrypt_aes_cbc(encrypted, key.buffer, iv.buffer);
  });

  ok(BufferUtils.buffer_equal(input.buffer, decrypted), "Input same as decrypted");
});

