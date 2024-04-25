import Form from '@/components/form'
import Hero from '@/components/hero'
import MyProject from '@/components/myproject'
import Skills from '@/components/skills'
import React from 'react'
import Projekt from './projekt/page'

export default function page() {
  return (
    <>
        <Hero></Hero>
    <MyProject></MyProject>
    <Skills></Skills>
    </>
  )
}
