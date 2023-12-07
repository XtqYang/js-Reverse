import requests

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-type': 'application/x-www-form-urlencoded',
    'Origin': 'https://www.zhihu.com',
    'Pragma': 'no-cache',
    'Referer': 'https://www.zhihu.com/signin?next=%2F',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

data = {
    'd': 'Cnw58tperumGOJoUXALn+1OkQeykY2Ht+qc.y3dhZ.nwy90Yx.L6/PJT5HHerj.G7m7CWKU2fWo8OiJLqk1puUJdv5fRzg6rrEZrBXE35FsZ7giSvaqvWarAQ1wPT9N82Pd8WTHBM5YxkQ.Zn3/y9Me2GST9qi6O7g.EzCkgJoc.AnxGQ.r0IF.cLmM12e16XOWqamriF0ku22QaMIdjycb77JQvDvPUp2ksiaEV2D0ZtPdJIoj1H6orXHi/kcbg4pDjAVXyQgjxu4pUxMgxqC2LMe7FsoduCKwhyMo8VRehN9LSzIJg6d9IUb5mcr0CIiq6ewgXBus+yWIDWu/x+1WgFCiCQ9ga7scjAc7nOmdnCfptgOIFim82wRnR6nk5WFF5cC.fqLy/SjYmi/ePUGOFOwYPT7sa1szy6p/nSsJTmFTtvXaS256k2TLw8Ot0IVVIDxr7bXcA+0y3oVcnRp66I2EW45TA+JmcyPTC7MUPdovSzcORuzbHwYIXT2YZ+tipaf..88svfRxZs6KYM4GfUaayPBZr2NqxBH7YXy0oAg9HkILHie.PAMw7c9a91YM.sWrWn42sLWnBW66ufGzVKjKCu0wXnYojItcjwo4SG7bQiG.6/0MJwHpd8EDXRSnTWkJDuNp3NQPL0M9fcMRFxMH3TZDtpQ6tfOiUmR..Jp6O114qwULpVNSk9EsMzXO+dN/.zaANjZ25O2WnvLC66aCbD2dd07fc8TffDkF15mOjcd4PC0IWreatbgMJkfOMdZWbm33jDoptz+wOzYtXDIkeb/ZOBZUVz0DRFi/nDT.9xyrZoPQnAvJGFkUP7to7ba/hmgGryupxWdtfdXUBqtgK71WTpmcxXaFPUnz69iyLpSDFSg0DCa4ZXrRh79yDCuDcRMMLUT4zz+6XFR3ANumMq6Zk+gZGAw8CLbQJ5ttmO7LxhmzA1Ia86sHEpB+E5DGpDyZf2Y2pthumUbrHPA6ae49MF5OirQ/wfaeSvyK3d2PThwmX.KC+kHg2Wj.YTNGsrAudXz2kCZwieYt+.nvN9iZcMrRm8HUUOgzEJ0wkJI4LDKRhi+Rh6s3JKNii7idDhfRVL0sLQ0AQG+RCprEIr0KXnN67gCFPrR0n..Szx0kyaE5h/P3ZSRgAWQ7IDiNDq2MdeTH5yAwJTKzFqPpN63h9riyYIO.L0bxu4YTu1HXq2nsJ.RZhJpfJIHnB5OiP1bg3dDH9Ip0waSC46adbGRRZ+j5ce9fCQ8MT5JZUHkfPCq+C1PwOUe9PZEFozDTDnF5jLwwrzLyPdqtZdUwFmJ.tHnS+30EFrkGgxM/FgMgxPEUjALgbEGXsjKvjYQnnmUzVmqQzV2Tsw7K/UcTqGadXMNFIWDoeF+76Jv2TfTxiBQUG/DkZ8fnv+KQ/zzjYL6Jmv627LgaKTKZxJY+SxMZtEU5.XBTRBENDt7Ze1wtbv57IV4g86+bA41e6dTa9FRyV.Nbtt1Yza/fw/sPCVY6zGIacNrc7NGj1twW38ZL0hhjC.AN+ob9WAahtksakr6Tvyf+Zyvt6Mqtnqd1ZyP6GM7amg3fuhsWhIYEK5K8jD19IdqGh7sxKvSIm0sOJizk7S1/AW6k2pcmEt3Vo7LcXnN9gY/1.mJIxWez0LCdFtNXD/hRZF6ZyPogOYDcyq2rdbKazesYWsHOZMiw5omQarid1OO2mz9orVrCGr4rp2K1WDSXhUTsMixU.tXk1Pjq.esBR3T9.67u0kf/awOwC+MUAcT4Cp2PQ97PsTWMbBpJW4Dq/NVxmif.xUyIn95xMrcaXz+kmq78PcH3geqFO1XwNMGcLvfTPXZ5H93CxdIfhA+nG9xxrJxAB4QkJDJqBLLBAdrWQEKvBiXGR4RRuQwNfudNmcouHFnFx.ahi3B0nBdtcjId0j2NuGMrfTse4eTPxzmUGbAa0e/W5o+MQp6tGEX.VUOCXIY0kfXrEn0kIVT5h2E.MXm/gXGImgcCNv.u5tPw5.rRwXYvaSXKd2okcw6kImLdBQcXkpWJ0vACHfox/oZsa28vhCSOux/3jJQYPQ+hOq6Kp7IkavIb0niW0ghcLx4n3IeoaJ7aao8ARLu+hBgaJv3G+vb5XiRbxqLLOsASQCoCHA3V6mCXjdCHgy0hdrPICxR6bu3FEHtOmwRVZjN/2OJgOz8inr/j8A067y.NGTtOFJBVBNuyTWLzmHXOJBRjnIejH',
    'v': 'e2891084',
    'cb': '__wmjsonp_881cff2',
}

response = requests.post('https://ac.dun.163.com/v3/b', headers=headers, data=data)
print(response.text)
# 获取响应中的Cookie
response_cookies = response.cookies

# 将Cookie打印出来
for cookie in response_cookies:
    print(f"{cookie.name}: {cookie.value}")