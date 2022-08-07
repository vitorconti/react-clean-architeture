import { SetStorageMock } from "@/data/test/mock-storage";
import faker from 'faker'
import { LocalSaveAccessToken } from "./local-save-access-token";

type SutTypes = {
    setStorageMock: SetStorageMock
    sut: LocalSaveAccessToken
}

const makeSut = (): SutTypes => {
    const setStorageMock = new SetStorageMock()
    const sut = new LocalSaveAccessToken(setStorageMock)
    return {
        setStorageMock,
        sut
    }
}

describe('LocalSaveAccessToken', () => {
    test('Should call SetStorage with correct value', async () => {
        const { sut, setStorageMock } = makeSut()
        const accessToken = faker.random.uuid()
        await sut.save(accessToken)
        expect(setStorageMock.key).toBe('accessToken')
        expect(setStorageMock.value).toBe(accessToken)
    })
    test('Should throw if SetStorage throws', async () => {
        const { sut, setStorageMock } = makeSut()
        jest.spyOn(setStorageMock, 'set').mockRejectedValueOnce(new Error())
        const promise = sut.save(faker.random.uuid())
        await expect(promise).rejects.toThrow(new Error())
    })
})
