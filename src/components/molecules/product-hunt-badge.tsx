import React from 'react'
import {
	Link,
	Image,
	useColorMode,
} from '@chakra-ui/react'

const ProductHuntBadge = () => {
	const { colorMode } = useColorMode()
	return (
		<Link
			href="https://www.producthunt.com/posts/meeshkan-ui-test-recorder?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-meeshkan-ui-test-recorder"
			isExternal
			textDecoration="none"
			_hover={{ textDecoration: 'none' }}
			textAlign="center"
		>
			<Image
				src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=296495&theme=${colorMode}`}
				alt="Meeshkan UI Test Recorder - No-code test writing that speeds up your release cycle | Product Hunt"
				width="250px"
				height="54px"
			/>
		</Link>
	)
}

export default ProductHuntBadge
