import Link from 'next/link'
export default function Page() {
    return (
        <div>
            <h1>Hello, This is your profile page!</h1>
            <p>Click on the link below to navigate to the Home page:</p>
            <Link href="/">
            Go to Home Page
            </Link>
        </div>
      )
  }