import React from 'react'
import {
	Link,
	Image,
	useColorMode,
} from '@chakra-ui/react'
import {
	ProductHuntDarkBadge,
	ProductHuntLightBadge,
} from '../../../theme/icons'

const ProductHuntBadge = () => {
	const { colorMode } = useColorMode()
	const badgeProps = { w: '250px', h: '54px' }
	return (
		<Link
			href="https://www.producthunt.com/posts/meeshkan-ui-test-recorder?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-meeshkan-ui-test-recorder"
			isExternal
			textDecoration="none"
			_hover={{ textDecoration: 'none' }}
			aria-label="Meeshkan UI Test Recorder - No-code test writing that speeds up your release cycle | Product Hunt"
			textAlign="center"
		>
			{colorMode === 'light' ? (
				<ProductHuntLightBadge {...badgeProps} />
			) : (
				<ProductHuntDarkBadge {...badgeProps} />
			)}
		</Link>
	)
}

export default ProductHuntBadge
