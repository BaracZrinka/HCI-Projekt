import React from 'react'
import HeaderFooterLayout from '../layouts/headerFooter'
import ReviewPage from "../components/ReviewPage"

const review = () => (
    <HeaderFooterLayout activeTab = "Review">
    <ReviewPage/>
    </HeaderFooterLayout>
)

export default review