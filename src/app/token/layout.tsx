"use client"; 
import Head from "next/head"

import React, { useState } from 'react'
import Script from 'next/script';

export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode
}) {
	return (
		<section>
            <Script
            src="https://telegram.org/js/telegram-web-app.js?1"
            strategy="lazyOnload"
        /> 

			{/* Include shared UI here e.g. a header or sidebar */}
			<nav>this is shared nav bar</nav>

			{children}
            {/* Includ shared bottom ui */}
            <footer>this is shared footer</footer>
		</section>
	)
}
