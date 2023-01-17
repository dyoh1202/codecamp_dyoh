import {useRouter} from "next/router";

export default function StaticRoutingPages() {

    const router = useRouter()


    const onClickRoutingOne = async () => {
        await router.push("/05-06-static-routed-board-query/1")
    }

    const onClickRoutingTwo = async () => {
        await router.push("/05-06-static-routed-board-query/2")
    }

    const onClickRoutingThree = async () => {
        await router.push("/05-06-static-routed-board-query/3")
    }

    return (
        <>
            <button onClick={onClickRoutingOne}>1번 게시글로 이동하기</button>
            <button onClick={onClickRoutingTwo}>2번 게시글로 이동하기</button>
            <button onClick={onClickRoutingThree}>3번 게시글로 이동하기</button>
        </>
    )
}