'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "91304b02dc58aaa35214f357ec38c7e1",
"assets/AssetManifest.bin.json": "d950103c30836143e3d38e63e3aa8fc1",
"assets/AssetManifest.json": "a6333a37f5e5adba89697c493225beed",
"assets/assets/images/carbonimage_1_x2.svg": "d0032e36d662da60aaf7be6c6170a566",
"assets/assets/images/carbonimage_2_x2.svg": "e4d78f9659b372ccb475ff95f61b976c",
"assets/assets/images/carbonimage_3_x2.svg": "54aaa65c62f75d533daf0a11520ffc3d",
"assets/assets/images/carbonimage_4_x2.svg": "d0032e36d662da60aaf7be6c6170a566",
"assets/assets/images/carbonimage_5_x2.svg": "a626e6cb1b02103d2b91f6f7e96ed015",
"assets/assets/images/carbonimage_6_x2.svg": "54aaa65c62f75d533daf0a11520ffc3d",
"assets/assets/images/carbonimage_x2.svg": "a626e6cb1b02103d2b91f6f7e96ed015",
"assets/assets/images/carbonwarning_1_x2.svg": "d08843df87c39f5e005b2b54848d5a57",
"assets/assets/images/carbonwarning_x2.svg": "43edcd46604a999415ac079141b62f24",
"assets/assets/images/epback_1_x2.svg": "88a2fdb49b6eafb05d66a837fdd74ad7",
"assets/assets/images/epback_2_x2.svg": "a5149a4a69af088f51ccec89ad1ca2f5",
"assets/assets/images/epback_3_x2.svg": "88a2fdb49b6eafb05d66a837fdd74ad7",
"assets/assets/images/epback_4_x2.svg": "88a2fdb49b6eafb05d66a837fdd74ad7",
"assets/assets/images/epback_5_x2.svg": "88a2fdb49b6eafb05d66a837fdd74ad7",
"assets/assets/images/epback_6_x2.svg": "88a2fdb49b6eafb05d66a837fdd74ad7",
"assets/assets/images/epback_7_x2.svg": "88a2fdb49b6eafb05d66a837fdd74ad7",
"assets/assets/images/epback_8_x2.svg": "29f03a085f30b8d2fa30df1414cdf09e",
"assets/assets/images/epback_x2.svg": "29f03a085f30b8d2fa30df1414cdf09e",
"assets/assets/images/frame_1_x2.svg": "d1e8fafb16d4a62e33cb1de0e1f5ad9b",
"assets/assets/images/frame_2_x2.svg": "16e2b14bafd3752b36bf951905e819fa",
"assets/assets/images/frame_x2.svg": "d1e8fafb16d4a62e33cb1de0e1f5ad9b",
"assets/assets/images/group_10_x2.svg": "5a5fc7bde7c9b8acd683c278d55a8bfc",
"assets/assets/images/group_11_x2.svg": "5a5fc7bde7c9b8acd683c278d55a8bfc",
"assets/assets/images/group_12_x2.svg": "87e1db669ddee0e158af297c4f30bf37",
"assets/assets/images/group_13_x2.svg": "3fe32aba8159a6c35df2511d310a8149",
"assets/assets/images/group_14_x2.svg": "87e1db669ddee0e158af297c4f30bf37",
"assets/assets/images/group_15_x2.svg": "a551ea2634e40e05cd0b1754beceaaf8",
"assets/assets/images/group_16_x2.svg": "19b0126791a8f0ef265a2dfee3ef58bb",
"assets/assets/images/group_17_x2.svg": "87e1db669ddee0e158af297c4f30bf37",
"assets/assets/images/group_18_x2.svg": "fb00be78253dd3304913d2b5ccd069e3",
"assets/assets/images/group_1_x2.svg": "d214d03eac037ce91f135e4eadca0ff1",
"assets/assets/images/group_2_x2.svg": "d214d03eac037ce91f135e4eadca0ff1",
"assets/assets/images/group_3_x2.svg": "87e1db669ddee0e158af297c4f30bf37",
"assets/assets/images/group_4_x2.svg": "628fb70e321cf124801eab454a3e8eef",
"assets/assets/images/group_5_x2.svg": "aa31cee796bf80c8c47c6be08ea15352",
"assets/assets/images/group_6_x2.svg": "5ab7124bddd8e5753a78daf157ff498b",
"assets/assets/images/group_7_x2.svg": "87e1db669ddee0e158af297c4f30bf37",
"assets/assets/images/group_8_x2.svg": "818c2c402984c577e4ccd42f8997ba71",
"assets/assets/images/group_9_x2.svg": "628fb70e321cf124801eab454a3e8eef",
"assets/assets/images/group_x2.svg": "5a5fc7bde7c9b8acd683c278d55a8bfc",
"assets/assets/images/g_1406_x2.svg": "9fe70bb2c390026b668bc05122c126da",
"assets/assets/images/image_x2.svg": "f65d76bc579499ca224075f83833011c",
"assets/assets/images/layer_1_x2.svg": "dda2cfe40ace89824dd6be208b6c1340",
"assets/assets/images/log.png": "851c368cf251db4dd81cde0a9cf2f558",
"assets/assets/images/logg2-removebg-preview.png": "49f8a74b4443f101919247306a24826b",
"assets/assets/images/logg3.jpg": "4f7dcb4df0e950c56b433677ef1d986c",
"assets/assets/images/logo.jpeg": "510715f0ae0d6f0be7303b749192f36f",
"assets/assets/images/logostelegram_x2.svg": "6815deed09860781fa441dda787b8078",
"assets/assets/images/logoswhatsapp_icon_x2.svg": "6ded23a571245eb1182b2c08bb7f03ef",
"assets/assets/images/seal.jpeg": "b30528698bef83abceed5eb4b6859f27",
"assets/assets/images/seal2.jpeg": "d4a360c0ce53a2f444aa389d0f572cee",
"assets/assets/images/vector_100_x2.svg": "de497852436d6062c5796d15d6510eec",
"assets/assets/images/vector_101_x2.svg": "e625bd7602c7d07b1a22a524da639908",
"assets/assets/images/vector_102_x2.svg": "9357669f228e96a9fe1af41a44b352c0",
"assets/assets/images/vector_103_x2.svg": "24a33527df31efa25d0afd36763b3180",
"assets/assets/images/vector_104_x2.svg": "1888e1f635e92d383f0b2ef94002d5c0",
"assets/assets/images/vector_105_x2.svg": "3758f0acbad9b652aaef69dc87ca0e47",
"assets/assets/images/vector_106_x2.svg": "a3e78a7ed235a2290bc38b64fabfd5fd",
"assets/assets/images/vector_107_x2.svg": "de497852436d6062c5796d15d6510eec",
"assets/assets/images/vector_108_x2.svg": "7f931292958d1bd991900cb3572817ca",
"assets/assets/images/vector_109_x2.svg": "de497852436d6062c5796d15d6510eec",
"assets/assets/images/vector_10_x2.svg": "8c81e6a011988bf448dca8b9ebd126d3",
"assets/assets/images/vector_110_x2.svg": "63a172374f003ea0b6f57881a50886ef",
"assets/assets/images/vector_111_x2.svg": "b9bf8b1a0797e837e5389f0716531417",
"assets/assets/images/vector_112_x2.svg": "63a172374f003ea0b6f57881a50886ef",
"assets/assets/images/vector_113_x2.svg": "10d0d0dceb60fdb3d5ebe3b3494980d4",
"assets/assets/images/vector_114_x2.svg": "02433760638a620fc8b242f9d006c5c2",
"assets/assets/images/vector_115_x2.svg": "10d0d0dceb60fdb3d5ebe3b3494980d4",
"assets/assets/images/vector_116_x2.svg": "911d1ff86574cc0350476b281513312c",
"assets/assets/images/vector_117_x2.svg": "7dbef40ac46d9daf2319af8957adba6c",
"assets/assets/images/vector_118_x2.svg": "ff5e2b352d20bb0659fd5af0217ed40a",
"assets/assets/images/vector_119_x2.svg": "9a2e5b31437513793867e25ac2433409",
"assets/assets/images/vector_11_x2.svg": "9a2e5b31437513793867e25ac2433409",
"assets/assets/images/vector_120_x2.svg": "ff5e2b352d20bb0659fd5af0217ed40a",
"assets/assets/images/vector_121_x2.svg": "1888e1f635e92d383f0b2ef94002d5c0",
"assets/assets/images/vector_122_x2.svg": "8c81e6a011988bf448dca8b9ebd126d3",
"assets/assets/images/vector_123_x2.svg": "a0089accf3f0e903d3944c4114405b8e",
"assets/assets/images/vector_124_x2.svg": "10d0d0dceb60fdb3d5ebe3b3494980d4",
"assets/assets/images/vector_125_x2.svg": "b8da29797cb72a06cec1206a81a1138e",
"assets/assets/images/vector_126_x2.svg": "1fb17bc02798b701e2a66c2c80b8713e",
"assets/assets/images/vector_127_x2.svg": "b8da29797cb72a06cec1206a81a1138e",
"assets/assets/images/vector_128_x2.svg": "24a33527df31efa25d0afd36763b3180",
"assets/assets/images/vector_129_x2.svg": "f45c6c6c526ce8122919afb29652dad6",
"assets/assets/images/vector_12_x2.svg": "e16100c21402eaad1b5d73bf7dac88ff",
"assets/assets/images/vector_130_x2.svg": "be2f4a0f374074de49bfd2d0c785afed",
"assets/assets/images/vector_131_x2.svg": "04fcce14b6307012523ae456d96a5206",
"assets/assets/images/vector_132_x2.svg": "de497852436d6062c5796d15d6510eec",
"assets/assets/images/vector_133_x2.svg": "de497852436d6062c5796d15d6510eec",
"assets/assets/images/vector_134_x2.svg": "23324ad8eeffe28d6cf0f1317253f63e",
"assets/assets/images/vector_135_x2.svg": "b8da29797cb72a06cec1206a81a1138e",
"assets/assets/images/vector_136_x2.svg": "9a2e5b31437513793867e25ac2433409",
"assets/assets/images/vector_137_x2.svg": "7f931292958d1bd991900cb3572817ca",
"assets/assets/images/vector_138_x2.svg": "7dbef40ac46d9daf2319af8957adba6c",
"assets/assets/images/vector_139_x2.svg": "ff5e2b352d20bb0659fd5af0217ed40a",
"assets/assets/images/vector_13_x2.svg": "1fb17bc02798b701e2a66c2c80b8713e",
"assets/assets/images/vector_140_x2.svg": "9357669f228e96a9fe1af41a44b352c0",
"assets/assets/images/vector_141_x2.svg": "ec03df20ea9c67d2976a2c649bd85ac1",
"assets/assets/images/vector_142_x2.svg": "63a172374f003ea0b6f57881a50886ef",
"assets/assets/images/vector_143_x2.svg": "0aadd75086c0db7b1e8c3016cd719e3d",
"assets/assets/images/vector_144_x2.svg": "1fb17bc02798b701e2a66c2c80b8713e",
"assets/assets/images/vector_145_x2.svg": "ff5e2b352d20bb0659fd5af0217ed40a",
"assets/assets/images/vector_146_x2.svg": "9a2e5b31437513793867e25ac2433409",
"assets/assets/images/vector_147_x2.svg": "63a172374f003ea0b6f57881a50886ef",
"assets/assets/images/vector_148_x2.svg": "63a172374f003ea0b6f57881a50886ef",
"assets/assets/images/vector_149_x2.svg": "c8806dc90b8ef42a24b9a5e12ba9341a",
"assets/assets/images/vector_14_x2.svg": "1888e1f635e92d383f0b2ef94002d5c0",
"assets/assets/images/vector_150_x2.svg": "24a33527df31efa25d0afd36763b3180",
"assets/assets/images/vector_151_x2.svg": "f45c6c6c526ce8122919afb29652dad6",
"assets/assets/images/vector_152_x2.svg": "b9bf8b1a0797e837e5389f0716531417",
"assets/assets/images/vector_153_x2.svg": "b8da29797cb72a06cec1206a81a1138e",
"assets/assets/images/vector_154_x2.svg": "2fe6948f0e498b895b785da93ae5f51d",
"assets/assets/images/vector_155_x2.svg": "b8da29797cb72a06cec1206a81a1138e",
"assets/assets/images/vector_156_x2.svg": "f7ff2bcba7dc91024cef753165762775",
"assets/assets/images/vector_157_x2.svg": "2213a002d2f8800091571e56d8dccaf9",
"assets/assets/images/vector_158_x2.svg": "24a33527df31efa25d0afd36763b3180",
"assets/assets/images/vector_159_x2.svg": "de497852436d6062c5796d15d6510eec",
"assets/assets/images/vector_15_x2.svg": "9357669f228e96a9fe1af41a44b352c0",
"assets/assets/images/vector_160_x2.svg": "a0089accf3f0e903d3944c4114405b8e",
"assets/assets/images/vector_161_x2.svg": "10d0d0dceb60fdb3d5ebe3b3494980d4",
"assets/assets/images/vector_162_x2.svg": "8c81e6a011988bf448dca8b9ebd126d3",
"assets/assets/images/vector_163_x2.svg": "9a2e5b31437513793867e25ac2433409",
"assets/assets/images/vector_164_x2.svg": "a0089accf3f0e903d3944c4114405b8e",
"assets/assets/images/vector_165_x2.svg": "7f931292958d1bd991900cb3572817ca",
"assets/assets/images/vector_166_x2.svg": "afb47df6980a261a69d96543456bf6f4",
"assets/assets/images/vector_167_x2.svg": "f1cc012f627913be04e1a479b7c6d973",
"assets/assets/images/vector_168_x2.svg": "06ed35dc2d7bb4a83076c769bc8a2c9a",
"assets/assets/images/vector_169_x2.svg": "ff5e2b352d20bb0659fd5af0217ed40a",
"assets/assets/images/vector_16_x2.svg": "10d0d0dceb60fdb3d5ebe3b3494980d4",
"assets/assets/images/vector_170_x2.svg": "06ed35dc2d7bb4a83076c769bc8a2c9a",
"assets/assets/images/vector_171_x2.svg": "f45c6c6c526ce8122919afb29652dad6",
"assets/assets/images/vector_172_x2.svg": "b8da29797cb72a06cec1206a81a1138e",
"assets/assets/images/vector_173_x2.svg": "de497852436d6062c5796d15d6510eec",
"assets/assets/images/vector_174_x2.svg": "de497852436d6062c5796d15d6510eec",
"assets/assets/images/vector_175_x2.svg": "8c81e6a011988bf448dca8b9ebd126d3",
"assets/assets/images/vector_176_x2.svg": "2213a002d2f8800091571e56d8dccaf9",
"assets/assets/images/vector_177_x2.svg": "99f758dcc8bfb7f7374d94245dd07e0a",
"assets/assets/images/vector_178_x2.svg": "06ed35dc2d7bb4a83076c769bc8a2c9a",
"assets/assets/images/vector_179_x2.svg": "b8da29797cb72a06cec1206a81a1138e",
"assets/assets/images/vector_17_x2.svg": "7dbef40ac46d9daf2319af8957adba6c",
"assets/assets/images/vector_180_x2.svg": "ff5e2b352d20bb0659fd5af0217ed40a",
"assets/assets/images/vector_181_x2.svg": "b8da29797cb72a06cec1206a81a1138e",
"assets/assets/images/vector_182_x2.svg": "9a2e5b31437513793867e25ac2433409",
"assets/assets/images/vector_183_x2.svg": "24a33527df31efa25d0afd36763b3180",
"assets/assets/images/vector_184_x2.svg": "de497852436d6062c5796d15d6510eec",
"assets/assets/images/vector_185_x2.svg": "24a33527df31efa25d0afd36763b3180",
"assets/assets/images/vector_186_x2.svg": "9a2e5b31437513793867e25ac2433409",
"assets/assets/images/vector_187_x2.svg": "8c81e6a011988bf448dca8b9ebd126d3",
"assets/assets/images/vector_188_x2.svg": "33d0d9a2165f358221dfeda960175d28",
"assets/assets/images/vector_189_x2.svg": "de497852436d6062c5796d15d6510eec",
"assets/assets/images/vector_18_x2.svg": "5a869108414f52263fa3960bcd974143",
"assets/assets/images/vector_190_x2.svg": "63a172374f003ea0b6f57881a50886ef",
"assets/assets/images/vector_191_x2.svg": "63a172374f003ea0b6f57881a50886ef",
"assets/assets/images/vector_192_x2.svg": "9357669f228e96a9fe1af41a44b352c0",
"assets/assets/images/vector_193_x2.svg": "63a172374f003ea0b6f57881a50886ef",
"assets/assets/images/vector_194_x2.svg": "7dbef40ac46d9daf2319af8957adba6c",
"assets/assets/images/vector_195_x2.svg": "28552a20a2b76399a5d70a330c70efd2",
"assets/assets/images/vector_19_x2.svg": "2fe6948f0e498b895b785da93ae5f51d",
"assets/assets/images/vector_1_x2.svg": "ae6d6f1548ee1e93b1ae34d0a7f4a54c",
"assets/assets/images/vector_20_x2.svg": "7f931292958d1bd991900cb3572817ca",
"assets/assets/images/vector_21_x2.svg": "63a172374f003ea0b6f57881a50886ef",
"assets/assets/images/vector_22_x2.svg": "ff5e2b352d20bb0659fd5af0217ed40a",
"assets/assets/images/vector_23_x2.svg": "9a2e5b31437513793867e25ac2433409",
"assets/assets/images/vector_24_x2.svg": "9a2e5b31437513793867e25ac2433409",
"assets/assets/images/vector_25_x2.svg": "ff5e2b352d20bb0659fd5af0217ed40a",
"assets/assets/images/vector_26_x2.svg": "b8da29797cb72a06cec1206a81a1138e",
"assets/assets/images/vector_27_x2.svg": "7421b4c1f8f5eb7cafc76be722d72a2b",
"assets/assets/images/vector_28_x2.svg": "10d0d0dceb60fdb3d5ebe3b3494980d4",
"assets/assets/images/vector_29_x2.svg": "24a33527df31efa25d0afd36763b3180",
"assets/assets/images/vector_2_x2.svg": "ff5e2b352d20bb0659fd5af0217ed40a",
"assets/assets/images/vector_30_x2.svg": "bdd0b036ef8b56f8540c4dc7b2838a26",
"assets/assets/images/vector_31_x2.svg": "f45c6c6c526ce8122919afb29652dad6",
"assets/assets/images/vector_32_x2.svg": "9a2e5b31437513793867e25ac2433409",
"assets/assets/images/vector_33_x2.svg": "a0089accf3f0e903d3944c4114405b8e",
"assets/assets/images/vector_34_x2.svg": "2fe6948f0e498b895b785da93ae5f51d",
"assets/assets/images/vector_35_x2.svg": "3e55ddb45d539c979b06a726eecbe7ab",
"assets/assets/images/vector_36_x2.svg": "10d0d0dceb60fdb3d5ebe3b3494980d4",
"assets/assets/images/vector_37_x2.svg": "63a172374f003ea0b6f57881a50886ef",
"assets/assets/images/vector_38_x2.svg": "de497852436d6062c5796d15d6510eec",
"assets/assets/images/vector_39_x2.svg": "ff5e2b352d20bb0659fd5af0217ed40a",
"assets/assets/images/vector_3_x2.svg": "63a172374f003ea0b6f57881a50886ef",
"assets/assets/images/vector_40_x2.svg": "24a33527df31efa25d0afd36763b3180",
"assets/assets/images/vector_41_x2.svg": "ff5e2b352d20bb0659fd5af0217ed40a",
"assets/assets/images/vector_42_x2.svg": "b8da29797cb72a06cec1206a81a1138e",
"assets/assets/images/vector_43_x2.svg": "7f931292958d1bd991900cb3572817ca",
"assets/assets/images/vector_44_x2.svg": "24a33527df31efa25d0afd36763b3180",
"assets/assets/images/vector_45_x2.svg": "7dc07da48fba3d6e7ad97fe67213c845",
"assets/assets/images/vector_46_x2.svg": "a80126e7859024ec7a26eb4f8283c5bd",
"assets/assets/images/vector_47_x2.svg": "f45c6c6c526ce8122919afb29652dad6",
"assets/assets/images/vector_48_x2.svg": "24a33527df31efa25d0afd36763b3180",
"assets/assets/images/vector_49_x2.svg": "bbd4567f97b89db3703cab2b81cb5202",
"assets/assets/images/vector_4_x2.svg": "9357669f228e96a9fe1af41a44b352c0",
"assets/assets/images/vector_50_x2.svg": "8c81e6a011988bf448dca8b9ebd126d3",
"assets/assets/images/vector_51_x2.svg": "8c81e6a011988bf448dca8b9ebd126d3",
"assets/assets/images/vector_52_x2.svg": "24a33527df31efa25d0afd36763b3180",
"assets/assets/images/vector_53_x2.svg": "10d0d0dceb60fdb3d5ebe3b3494980d4",
"assets/assets/images/vector_54_x2.svg": "a0089accf3f0e903d3944c4114405b8e",
"assets/assets/images/vector_55_x2.svg": "8c81e6a011988bf448dca8b9ebd126d3",
"assets/assets/images/vector_56_x2.svg": "10d0d0dceb60fdb3d5ebe3b3494980d4",
"assets/assets/images/vector_57_x2.svg": "24a33527df31efa25d0afd36763b3180",
"assets/assets/images/vector_58_x2.svg": "04fcce14b6307012523ae456d96a5206",
"assets/assets/images/vector_59_x2.svg": "7dbef40ac46d9daf2319af8957adba6c",
"assets/assets/images/vector_5_x2.svg": "63a172374f003ea0b6f57881a50886ef",
"assets/assets/images/vector_60_x2.svg": "24a33527df31efa25d0afd36763b3180",
"assets/assets/images/vector_61_x2.svg": "9a2e5b31437513793867e25ac2433409",
"assets/assets/images/vector_62_x2.svg": "be2f4a0f374074de49bfd2d0c785afed",
"assets/assets/images/vector_63_x2.svg": "8c81e6a011988bf448dca8b9ebd126d3",
"assets/assets/images/vector_64_x2.svg": "ff5e2b352d20bb0659fd5af0217ed40a",
"assets/assets/images/vector_65_x2.svg": "9a2e5b31437513793867e25ac2433409",
"assets/assets/images/vector_66_x2.svg": "f45c6c6c526ce8122919afb29652dad6",
"assets/assets/images/vector_67_x2.svg": "de497852436d6062c5796d15d6510eec",
"assets/assets/images/vector_68_x2.svg": "a0089accf3f0e903d3944c4114405b8e",
"assets/assets/images/vector_69_x2.svg": "7f931292958d1bd991900cb3572817ca",
"assets/assets/images/vector_6_x2.svg": "de497852436d6062c5796d15d6510eec",
"assets/assets/images/vector_70_x2.svg": "7421b4c1f8f5eb7cafc76be722d72a2b",
"assets/assets/images/vector_71_x2.svg": "63a172374f003ea0b6f57881a50886ef",
"assets/assets/images/vector_72_x2.svg": "ff5e2b352d20bb0659fd5af0217ed40a",
"assets/assets/images/vector_73_x2.svg": "b8da29797cb72a06cec1206a81a1138e",
"assets/assets/images/vector_74_x2.svg": "7dbef40ac46d9daf2319af8957adba6c",
"assets/assets/images/vector_75_x2.svg": "9357669f228e96a9fe1af41a44b352c0",
"assets/assets/images/vector_76_x2.svg": "9a2e5b31437513793867e25ac2433409",
"assets/assets/images/vector_77_x2.svg": "2213a002d2f8800091571e56d8dccaf9",
"assets/assets/images/vector_78_x2.svg": "ff5e2b352d20bb0659fd5af0217ed40a",
"assets/assets/images/vector_79_x2.svg": "2213a002d2f8800091571e56d8dccaf9",
"assets/assets/images/vector_7_x2.svg": "1888e1f635e92d383f0b2ef94002d5c0",
"assets/assets/images/vector_80_x2.svg": "10d0d0dceb60fdb3d5ebe3b3494980d4",
"assets/assets/images/vector_81_x2.svg": "2213a002d2f8800091571e56d8dccaf9",
"assets/assets/images/vector_82_x2.svg": "b8da29797cb72a06cec1206a81a1138e",
"assets/assets/images/vector_83_x2.svg": "9357669f228e96a9fe1af41a44b352c0",
"assets/assets/images/vector_84_x2.svg": "7dc07da48fba3d6e7ad97fe67213c845",
"assets/assets/images/vector_85_x2.svg": "e3346ac0def6202e34dc4f5d1daef008",
"assets/assets/images/vector_86_x2.svg": "b8da29797cb72a06cec1206a81a1138e",
"assets/assets/images/vector_87_x2.svg": "9357669f228e96a9fe1af41a44b352c0",
"assets/assets/images/vector_88_x2.svg": "63a172374f003ea0b6f57881a50886ef",
"assets/assets/images/vector_89_x2.svg": "7dc07da48fba3d6e7ad97fe67213c845",
"assets/assets/images/vector_8_x2.svg": "63a172374f003ea0b6f57881a50886ef",
"assets/assets/images/vector_90_x2.svg": "f45c6c6c526ce8122919afb29652dad6",
"assets/assets/images/vector_91_x2.svg": "9a2e5b31437513793867e25ac2433409",
"assets/assets/images/vector_92_x2.svg": "a0089accf3f0e903d3944c4114405b8e",
"assets/assets/images/vector_93_x2.svg": "b8da29797cb72a06cec1206a81a1138e",
"assets/assets/images/vector_94_x2.svg": "9a2e5b31437513793867e25ac2433409",
"assets/assets/images/vector_95_x2.svg": "3bb46313a4e0ca48391cae136505aa6e",
"assets/assets/images/vector_96_x2.svg": "04fcce14b6307012523ae456d96a5206",
"assets/assets/images/vector_97_x2.svg": "81a60cfe965d7873513243a9ce4597e5",
"assets/assets/images/vector_98_x2.svg": "24a33527df31efa25d0afd36763b3180",
"assets/assets/images/vector_99_x2.svg": "1fb17bc02798b701e2a66c2c80b8713e",
"assets/assets/images/vector_9_x2.svg": "7fe19b83847031cc8ec05f843e7f484c",
"assets/assets/images/vector_x2.svg": "10d0d0dceb60fdb3d5ebe3b3494980d4",
"assets/assets/images/WhatsApp%2520Image%25202025-02-05%2520at%25208.01.23%2520PM-Photoroom.png": "ce5c44a3dfef43a34c9ca23d9c2e2678",
"assets/assets/website/id_card.html": "01aa26fec909cfc34b35cd965e787ea1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cb23a7ea4ab0f39adb6e207be138fd61",
"assets/NOTICES": "0f1a835df58cc964c16d7cb26f7a941d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a05e23eede1782d3af2a597effba6504",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8e7a84c328822407c4e3414708d0586b",
"/": "8e7a84c328822407c4e3414708d0586b",
"main.dart.js": "e71516d64b293c0837b75e9fd6c6d3a8",
"manifest.json": "19db672bdba1681285ff561ac3fa23c2",
"version.json": "072086faf78358276827e082f392a939"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
