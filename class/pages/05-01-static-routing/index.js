import {useRouter} from "next/router";

export default function StaticRoutingPages() {

    const router = useRouter()
    const onClickRouting = async () => {
        await router.push("/05-02-static-routed")
    }

    return <button onClick={onClickRouting}>페이지 이동하기</button>
}