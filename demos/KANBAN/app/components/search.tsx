import { Button } from '#/components/button'
import { SearchIcon } from '#/components/icons'
import { Input, Label } from '#/components/input'
import { css } from '#/utils/css'
import { routes } from '#/routes'

export function Search() {
  return (
    <form
      method={'GET'}
      action={routes.admin.search.href()}
      css={css`
        display: flex;
        align-items: center;
        gap: var(--spacing-3);
      `}
    >
      <Label
        css={css`
          display: flex;
          gap: var(--spacing-3);
          align-items: center;
          position: relative;
          width: 30rem;
        `}
      >
        <SearchIcon
          css={css`
            position: absolute;
            left: var(--spacing-2_5);
            top: 50%;
            transform: translateY(-50%);
          `}
        />
        <Input
          type={'search'}
          name={'q'}
          defaultValue={''}
          css={css`
            padding-left: var(--spacing-10);
            @media (min-width: 640px) {
              padding-left: var(--spacing-12);
            }
          `}
          placeholder={'Search product, supplier, order'}
        />
      </Label>
      <Button
        type={'submit'}
        css={css`
          padding: var(--spacing-2) var(--spacing-4);
          @media (min-width: 640px) {
            padding: var(--spacing-2) var(--spacing-6);
          }
        `}
      >
        Search
      </Button>
    </form>
  )
}
