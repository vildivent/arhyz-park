// import Spinner from '../Spinner';
// import ModalDialog from './Modal';

// export default function DeletionConfirmation({trigger, confirm, isLoading}:{trigger: React.ReactNode; confirm: ()=>void; isLoading?: boolean}) {
//   return (
//     <ModalDialog
//       isDismissable
//       trigger={trigger}
//     >
//       {({ close }) => (
//         <Container>
//           <Button
//             variant="primary"
//             className="ml-auto h-10 w-10 rounded-full p-2"
//             onPress={close}
//           >
//             <CloseIcon />
//           </Button>
//           <h1 className="text-center text-3xl">
//             Удалить все данные об инструкторе?
//           </h1>
//           <div className="grid grid-cols-2 gap-5">
//             <Button className="w-full" variant="primary" onPress={close}>
//               Нет
//             </Button>
//             <Button
//               variant="warning"
//               isDisabled={isLoading}
//               onPress={() => {
//                 mutate(
//                   { id },
//                   {
//                     onSuccess() {
//                       close();
//                       router.refresh();
//                     },
//                   },
//                 );
//               }}
//             >
//               Удалить
//               {isLoading && <Spinner variant="light" />}
//             </Button>
//           </div>
//         </Container>
//       )}
//     </ModalDialog>
//   )
// }
