import React from "react"
import SEO from "../components/seo"
import HeaderFooterLayout from '../layouts/headerFooter'
import ProfileAbout from '../components/ProfileAbout'
//import ProfileFeed from '../components/ProfileFeed'
import ProfileContainer from '../modules/ProfileContainer'
import { Link } from "gatsby"

const Profile = () => (
    <main>
    <HeaderFooterLayout activeTab = "Profile">
        <ProfileAbout/>
        <ProfileContainer/>
    </HeaderFooterLayout>
    </main>
)

export default Profile