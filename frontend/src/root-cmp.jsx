import React from 'react'
import { Routes, Route } from 'react-router'


import { Header } from "./cmps/header"


export function RootCmp() {
    return (
        <section className="app">
            <Header />
            <main className="app-main">
                hello from main
            </main>
        </section>
    )
}