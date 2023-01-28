import config from '../config.json'

const baseUrl = 'zoommtg://zoom.us/join'

export function createLink(roomId: number, password: string) {
  return baseUrl + `?confno=${roomId}&pwd=${password}&uname=${config.username}`
}
