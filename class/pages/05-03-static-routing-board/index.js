import {useRouter} from "next/router";

export default function StaticRoutingPages() {

    const router = useRouter()

    const onClickRoutingOne = async () => {
        await router.push("/05-04-static-routed-board/1")
    }

    const onClickRoutingTwo = async () => {
        await router.push("/05-04-static-routed-board/2")
    }

    const onClickRoutingThree = async () => {
        await router.push("/05-04-static-routed-board/3")
    }

    return (
        <>
            <button onClick={onClickRoutingOne}>1번 게시글로 이동하기</button>
            <button onClick={onClickRoutingTwo}>2번 게시글로 이동하기</button>
            <button onClick={onClickRoutingThree}>3번 게시글로 이동하기</button>
        </>
    )
}