import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import Home from '../pages/Home'

export default function Router() {
  return (
    <BrowserRouter>
        <AuthLayout/>
    </BrowserRouter>
  )
}