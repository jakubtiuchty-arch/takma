/** One product card per PN; preserve addresses of previously duplicated cards. */
export const accessoryIdRedirects: Record<string, string> = {
  'zebra-mc33-dc-cable-388': 'zebra-cable-dc-388',
  'zebra-em45-usb-cable': 'zebra-cable-usbc-et4x',
  'zebra-power-converter-9v60v-et6x': 'zebra-dc-dc-9-60v-et6x',
  'zebra-installation-kit-et6x': 'zebra-direct-wire-kit-et6x',
}

export const accessorySlugRedirects: Record<string, string> = {
  'zebra-mc33-dc-cable-388': 'zebra-kabel-zasilajacy-388',
  'zebra-kabel-usb-c-em45': 'zebra-cable-usbc-et4x',
  'zebra-power-converter-9v60v-et6x': 'zebra-dc-dc-9-60v-et6x',
  'zebra-installation-kit-et6x': 'zebra-direct-wire-kit-et6x',
}
