import React from 'react'
import { Routes, Route } from 'react-router'


import { Header } from "./cmps/header"
import { HomePage } from './views/home-page'
import { AddUserInfo } from './views/add-user-info'


export function RootCmp() {
    return (
        <section className="app">
            <Header />
            <main className="app-main">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/addUserInfo" element={<AddUserInfo />} />
                </Routes>
            </main>
        </section>
    )
}