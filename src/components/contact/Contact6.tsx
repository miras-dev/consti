"use client";
import { Button, Checkbox, Input, Label, RadioGroup, RadioGroupItem, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Textarea } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">Connect</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Send a message</h2>
            <p className="md:text-md">Tell me about your situation and what you&apos;re looking to achieve.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 py-2">
            <div className="flex items-center gap-4"><BiEnvelope className="size-6 flex-none" /><p>hello@relume.io</p></div>
            <div className="flex items-center gap-4"><BiPhone className="size-6 flex-none" /><p>+49 172 7488509</p></div>
            <div className="flex items-center gap-4"><BiMap className="size-6 flex-none" /><p>Jean-Monnet-Stra&szlig;e 4, 10557 Berlin</p></div>
          </div>
        </div>
        <form className="grid max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center"><Label htmlFor="firstName" className="mb-2">First name</Label><Input type="text" id="firstName" /></div>
            <div className="grid w-full items-center"><Label htmlFor="lastName" className="mb-2">Last name</Label><Input type="text" id="lastName" /></div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center"><Label htmlFor="email" className="mb-2">Email</Label><Input type="email" id="email" /></div>
            <div className="grid w-full items-center"><Label htmlFor="phone" className="mb-2">Phone number</Label><Input type="text" id="phone" /></div>
          </div>
          <div className="grid w-full items-center">
            <Label className="mb-2">What brings you here?</Label>
            <Select><SelectTrigger><SelectValue placeholder="Select one..." /></SelectTrigger>
              <SelectContent>
                <SelectItem value="first-choice">First Choice</SelectItem>
                <SelectItem value="second-choice">Second Choice</SelectItem>
                <SelectItem value="third-choice">Third Choice</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full items-center py-3 md:py-4">
            <Label className="mb-3 md:mb-4">Which describes your situation?</Label>
            <RadioGroup className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              {["Student", "Young professional", "Entrepreneur or freelancer", "Established professional", "International relocating", "Other"].map((opt, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt} id={`choice-${i}`} />
                  <Label htmlFor={`choice-${i}`}>{opt}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="grid w-full items-center"><Label htmlFor="message" className="mb-2">Message</Label><Textarea id="message" placeholder="Tell me more..." className="min-h-[11.25rem] overflow-auto" /></div>
          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4"><Checkbox id="terms" /><Label htmlFor="terms" className="cursor-pointer">I agree to the terms and privacy policy.</Label></div>
          <div><Button title="Send">Send</Button></div>
        </form>
      </div>
    </section>
  );
}
