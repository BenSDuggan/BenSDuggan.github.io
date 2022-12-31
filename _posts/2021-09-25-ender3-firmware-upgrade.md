---
title:  "How to Upgrade the Ender 3 Firmware"
date:   2021-07-29 14:00:02 -0500
categories: [Blog]
tags: [3d-printing, solution]
math: false
mermaid: false
image:
  path: /assets/images/3d-printing.jpg
  alt: Ender 3 3D printer
---


The Creality Ender 3 stock firmware lacks thermal runaway protection and thus is unsafe. Many people have done this before, but this post shows the steps that worked for me. There are good open-source firmware options such as [Marlin](https://marlinfw.org/). [This tutorial](https://howchoo.com/ender3/ender-3-bootloader-firmware-update-marlin) was great at showing how to upload the firmware and should be consulted. 

I will place the general steps outlined in the tutorial below and what I did differently.

# Add the bootloader

The bootloader is the first piece of code run when a processor starts. By updating the bootloader the Ender 3 the firmware can be uploaded over USB. A bootloader is technically not necessary, but it makes changing the firmware much easier.

## Prepare the Arduino IDE

1. Install the `U8glib` library
2. Add the Sanguino board
	1. Open Arduino preferences
	2. Add this to the "Additional Boards Manager URLs" https://raw.githubusercontent.com/Lauszus/Sanguino/master/package_lauszus_sanguino_index.json
	3. Go to board manager and add the Sanguino board

## Make the Arduino an ISP

1. Open the Arduino ISP example sketch
2. Plug in the Arduino Uno
3. Tools --> select the board
4. Select Arduino Uno as the board and the correct port
5. Upload to the Arduino

## Connect the Arduino to the Ender 3

Ender 3 | Arduino Uno
--------|------------
5V | 5V
GND | GND
MISO | MISO
MOSI | MOSI
SCK | SCK
RESET | 10


## Burn bootloader

Select the following:

1. Tools --> Boards --> Sanguino 
2. Tools --> Processor --> Atmega 1284 or Atmega 1284p (16 MHz)
3. Tools --> Programmer --> Arduino as ISP
4. Tools --> Burn bootlader


***The Ender 3 now has a bootloader!*** This shouldn't have to be done again.

# Upload the new firmware

The [Marlin](https://marlinfw.org/) firmware will be used. There are many default configs available on their [Configurations GitHub](https://github.com/MarlinFirmware/Configurations). I used the [CrealityV1](https://github.com/MarlinFirmware/Configurations/tree/import-2.0.x/config/examples/Creality/Ender-3/CrealityV1) firmware for my Ender 3. Once the config files have been chosen, the Marlin Arduino file can be opened. My firmware is located [here]().

## Upload

