
import React, { useState } from 'react'


export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode
}) {
	return (
		<section>


			{/* Include shared UI here e.g. a header or sidebar */}
			<nav>this is shared nav bar</nav>

			{children}
            {/* Includ shared bottom ui */}
            <footer>this is shared footer</footer>
		</section>
	)
}
