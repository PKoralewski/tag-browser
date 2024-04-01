import { Spinner, SpinnerProps } from "@chakra-ui/spinner"

import { ILoaderProps } from "../types/Loader"

const Loader = ({ isLoading, children, ...props }: ILoaderProps & SpinnerProps) => {
	return isLoading ? (
		<Spinner
			boxSize={["35px", "37px", "40px", "42px", "50px"]}
			mx='auto'
			my='auto'
			thickness='1px'
			speed='0.65s'
			emptyColor='gray.200'
			color='gray.700'
			{...props}
		/>
	) : (
		<>{children}</>
	)
}

export default Loader
