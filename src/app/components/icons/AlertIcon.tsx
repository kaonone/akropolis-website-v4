// tslint:disable:max-line-length
import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function AlertIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 16 15">
      <path
        fill="#FF5959"
        d="M13.945 14.406c1.117 0 1.828-.812 1.828-1.836 0-.304-.078-.61-.242-.898L9.72 1.273C9.383.664 8.766.343 8.14.343c-.618 0-1.243.313-1.579.93L.758 11.68c-.172.28-.25.586-.25.89 0 1.024.71 1.836 1.828 1.836h11.61zM8.141 9.32c-.399 0-.625-.226-.641-.64l-.11-3.563c-.015-.414.305-.719.743-.719.437 0 .765.313.75.727l-.11 3.555c-.015.422-.242.64-.632.64zm0 2.742c-.446 0-.852-.335-.852-.812 0-.469.399-.813.852-.813.453 0 .851.336.851.813 0 .477-.406.813-.851.813z"
      />
    </SvgIcon>
  );
}

export { AlertIcon };
