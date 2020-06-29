---
layout: post
title:  "Special Relativity simulator"
date:   2017-06-17 14:56:46 -0500
categories: fun science simulation

---

Albert Einstein's 1905 Theory of Special Relativity was a revolutionary theory that changed the way we think about space and time. Built off just two postulates: 1) that the speed of light is constant (around 300,000,000 meters per second) and 2) that the laws of physics apply equally in all inertial reference frames. The insight for this theory's creation was obtained when Einstein asked a simple question: what would you see if you were traveling close to the speed of light. In 1905 while riding a bus he looked back at the clock tower in Burn, Switzerland and wondered what he would see if he looked at the clock as the bus was traveling near the speed of light. He concluded that he would see time slower relative to the people at rest next to the clock.

How can time appear to move slower for Einstein and normal to people at rest? He concluded that as you travel faster and faster time slows down relative to an observer at rest. Through a simple derivation he then found this equation: t = gamma * tau. Tau is known as the proper time which is the time elapsed by the person that experienced the start and end event. Gamma is also known as the Lorentz factor and describes how much time dilation occurs. The Lorentz factor is equal to 1 divided the square root of 1 minus the squared of the relative velocity divided by the speed of light (1/sqrt[1-(v/c)^2]). t is the time experienced by the observer at rest. Sense the Lorentz factor has a range of 1 to infinity it has a range of tau to infinity. This means that t can never be less than tau and at any speed will be greater than tau.  More about special relativity and the derivation for this formula can be found <a href="https://sciencebasedlife.wordpress.com/2012/08/10/derive-time-dilation-yourself-feel-like-a-genius/">here</a>.

This simulator used this formula to compare Einstein’s time to the clock tower’s time.  This simulator was built using <a href="https://p5js.org/">p5.js</a>.  The proper time, or reference frame which is moving, can be changed with the buttons in the lower left corner.  The speed is adjusted with the slider in the lower right corner.  Below is the built simulator and the code for it.

<iframe src="/assets/other/special-relativity-simulator.html" height="600" width="800" align="middle" scrolling="no" frameborder="0"></iframe>
